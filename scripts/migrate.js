const { sql } = require("@vercel/postgres")

async function migrate() {
  try {
    console.log("🚀 Starting database migration...")

    // Check if tables exist
    const { rows: tables } = await sql`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `

    if (tables.length === 0) {
      console.log("📋 Creating database tables...")

      // Run the SQL from 001-create-tables.sql
      await sql`
        -- Create users table
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL,
          password_hash VARCHAR(255) NOT NULL,
          role VARCHAR(50) DEFAULT 'user',
          avatar_url TEXT,
          bio TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Create companies table
        CREATE TABLE IF NOT EXISTS companies (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          description TEXT,
          logo_url TEXT,
          website_url TEXT,
          founded_year INTEGER,
          industry VARCHAR(255),
          location VARCHAR(255),
          employee_count VARCHAR(50),
          funding_stage VARCHAR(100),
          total_funding DECIMAL(15,2),
          valuation DECIMAL(15,2),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Create products table
        CREATE TABLE IF NOT EXISTS products (
          id SERIAL PRIMARY KEY,
          company_id INTEGER REFERENCES companies(id) ON DELETE CASCADE,
          name VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          description TEXT,
          image_url TEXT,
          category VARCHAR(255),
          price DECIMAL(10,2),
          currency VARCHAR(10) DEFAULT 'INR',
          launch_date DATE,
          status VARCHAR(50) DEFAULT 'active',
          features JSONB,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Create content table
        CREATE TABLE IF NOT EXISTS content (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          slug VARCHAR(255) UNIQUE NOT NULL,
          description TEXT,
          content_type VARCHAR(50) NOT NULL,
          thumbnail_url TEXT,
          content_url TEXT,
          author_id INTEGER REFERENCES users(id),
          company_id INTEGER REFERENCES companies(id),
          product_id INTEGER REFERENCES products(id),
          views INTEGER DEFAULT 0,
          duration INTEGER,
          published_at TIMESTAMP,
          status VARCHAR(50) DEFAULT 'draft',
          tags JSONB,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        -- Create bookmarks table
        CREATE TABLE IF NOT EXISTS bookmarks (
          id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
          content_id INTEGER REFERENCES content(id) ON DELETE CASCADE,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          UNIQUE(user_id, content_id)
        );

        -- Create user_progress table
        CREATE TABLE IF NOT EXISTS user_progress (
          id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
          content_id INTEGER REFERENCES content(id) ON DELETE CASCADE,
          progress_percentage INTEGER DEFAULT 0,
          completed_at TIMESTAMP,
          last_accessed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          UNIQUE(user_id, content_id)
        );

        -- Create sessions table for auth
        CREATE TABLE IF NOT EXISTS sessions (
          id SERIAL PRIMARY KEY,
          user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
          token VARCHAR(255) UNIQUE NOT NULL,
          expires_at TIMESTAMP NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `

      console.log("✅ Database tables created successfully")

      // Create indexes
      await sql`
        CREATE INDEX IF NOT EXISTS idx_companies_slug ON companies(slug);
        CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
        CREATE INDEX IF NOT EXISTS idx_products_company_id ON products(company_id);
        CREATE INDEX IF NOT EXISTS idx_content_slug ON content(slug);
        CREATE INDEX IF NOT EXISTS idx_content_company_id ON content(company_id);
        CREATE INDEX IF NOT EXISTS idx_content_product_id ON content(product_id);
        CREATE INDEX IF NOT EXISTS idx_bookmarks_user_id ON bookmarks(user_id);
        CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_progress(user_id);
        CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(token);
        CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);
      `

      console.log("✅ Database indexes created successfully")

      // Seed data
      console.log("🌱 Seeding initial data...")

      await sql`
        INSERT INTO companies (name, slug, description, logo_url, website_url, founded_year, industry, location, employee_count, funding_stage, total_funding, valuation) VALUES
        ('K7 Computing', 'k7-computing', 'Leading cybersecurity company providing comprehensive security solutions for businesses and individuals.', '/images/k7-security-logo.png', 'https://k7computing.com', 1991, 'Cybersecurity', 'Chennai, India', '500-1000', 'Private', 50000000, 200000000),
        ('Jammi Ayurveda', 'jammi-ayurveda', 'Traditional Ayurvedic medicine company focused on natural health and wellness products.', '/images/jammi-founder-logo.png', 'https://jammiayurveda.com', 2010, 'Healthcare', 'Hyderabad, India', '100-500', 'Series A', 10000000, 50000000),
        ('Watsan Envirotech', 'watsan-envirotech', 'Water purification and sanitation solutions for homes and communities.', '/images/watsan-logo.png', 'https://watsanenvirotech.com', 2015, 'Environmental Technology', 'Bangalore, India', '50-100', 'Seed', 2000000, 10000000),
        ('Milky Mist', 'milky-mist', 'Premium dairy products company known for quality paneer, curd, and dairy items.', '/images/milky-mist-logo.png', 'https://milkymist.in', 2009, 'Food & Beverages', 'Tamil Nadu, India', '1000-5000', 'IPO Ready', 100000000, 500000000),
        ('Organic Shandy', 'organic-shandy', 'Organic food products including vegetables, fruits, grains, and personal care items.', '/images/organic-shandy-logo.png', 'https://organicshandy.com', 2018, 'Organic Food', 'Kerala, India', '10-50', 'Bootstrap', 500000, 5000000)
        ON CONFLICT (slug) DO NOTHING;
      `

      console.log("✅ Database migration completed successfully!")
    } else {
      console.log("✅ Database tables already exist, skipping migration")
    }
  } catch (error) {
    console.error("❌ Migration failed:", error)
    process.exit(1)
  }
}

migrate()
