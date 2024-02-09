import bcrypt from 'bcryptjs';

const users = [
    {
        fname: 'Administrator',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('123456', 10),
        IsAdmin: true
    },
    {
        fname: 'John Doe',
        email: 'john@email.com',
        password: bcrypt.hashSync('123456', 10),
        IsAdmin: false
    },
    {
        fname: 'jane Doe',
        email: 'jane@email.com',
        password: bcrypt.hashSync('123456', 10),
        IsAdmin: false
    },
]

export default users;