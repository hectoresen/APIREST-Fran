db.create({
    user: 'admin',
    pwd: 'adminPassword123',
    roles: [
        {
            role: 'readWrite',
            db: 'TRAINIG_DB'
        },
    ],
});

db = db.getSibilingDB('TRAINIG_DB');

db.createCollection('INSURANCES');

db.INSURANCES.insertMany([
    {
        name: 'insurance 1',
        address: 'addres1',
        phone: '+34 600000000',
        email: 'ensurance1@prueba.com',
        postal_code: 14920
    }
])