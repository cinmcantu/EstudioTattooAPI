const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/sequelize')

class Portfolio extends Model{}

Portfolio.init({
    artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: DataTypes.STRING,
    size: {
        type: DataTypes.STRING,
        validate:{
            isIn: [["tiny", "small", "medium", "big", "huge"]]
        }
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false,
        set      : function(val) {
            this.setDataValue('tag', val.toLowerCase());
        }
    },
    color: {
        type: DataTypes.STRING,
        validate:{
            isIn: [["black and white", "colored"]]
        }
    },
    avaliable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'portfolio'
})

module.exports = Portfolio