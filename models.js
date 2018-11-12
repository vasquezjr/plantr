const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');


const Gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
})

const Plot = db.define('plot', {
    size: {
        type: Sequelize.INTEGER
    },
    shaded: {
        type: Sequelize.BOOLEAN
    }
})

const Vegetable = db.define('vegetable', {
    name: {
        type: Sequelize.STRING
    },
    color: {
        type: Sequelize.STRING
    },
    planted_on: {
        type: Sequelize.DATE
    }
})

//use through for multiple?
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'});
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'});

//use as for only single items?
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

module.exports = {db, Gardener, Plot, Vegetable};
//module.exports = {db};