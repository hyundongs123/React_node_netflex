const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // 데이터베이스 연결 가져오기


const User = sequelize.define('User', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: '풀네임을 입력해주세요.' },
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
        validate: {
            notNull: { msg: '이메일을 입력해주세요.' },
            isEmail: { msg: '유효한 이메일을 입력해주세요.' },
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: '비밀번호를 입력해주세요.' },
            len: { args: [6], msg: '6자리 이상 입력해주세요.' },
        },
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: null,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    likedMovies: {
        type: DataTypes.ARRAY(DataTypes.INTEGER), // This would represent liked movie IDs.
        defaultValue: [],
    }
}, {
    timestamps: true, // This will automatically create the `createdAt` and `updatedAt` fields.
    tableName: 'users',
});

module.exports = User;
