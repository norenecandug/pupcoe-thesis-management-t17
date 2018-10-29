const config = {
  development: {
    db: {
  database: 'd3hjf274qkkd73',
  user: 'hmncopgnquhlzy',
  password: '993a26f431b127c8a81a8f35208c73231349c8a282c9c33b0a53a426dd8617ce',
  host: 'ec2-50-17-225-140.compute-1.amazonaws.com',
  port: 5432,
  ssl: true
    },
    nodemailer: {
    }
  },
  production: {
    db: {
      database: 'd3hjf274qkkd73',
  user: 'hmncopgnquhlzy',
  password: '993a26f431b127c8a81a8f35208c73231349c8a282c9c33b0a53a426dd8617ce',
  host: 'ec2-50-17-225-140.compute-1.amazonaws.com',
  port: 5432,
  ssl: true
    },
    nodemailer: {

    }
  }
};

module.exports = process.env.NODE_ENV === 'production' ? config.production : config.development;
