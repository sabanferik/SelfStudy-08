"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Purchase Controller
/* 
    Stokta 0 ürün var
    a ürününden 20 adet aldık stokta ürün 20
    a ürününden 80 adet daha aldık stokta 100
    a üründünden 10 adet aldık ürün 110
    10 alınan ürün satın alamaişlemini sildik ürün 100
    20 adet aldığımız ürün esasen 15 miş düzenleme yaptım ürün 95 
*/
const Purchase = require('../models/purchase')

module.exports = {

    list: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */
        const data = await res.getModelList(Purchase, {}, [
            { path: 'userId', select: 'username email' },
            { path: 'firmId', select: 'name image' },
            'brandId',
            { path: 'productId', select: 'productId name categoryId' }
        ])

        res.status(200).send({
            error: false,
            details: await res.getModelsListDetails(Purchase),
            data
        })
    },

    create: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Purchase 1"
                }
            }
        */

            // user
    },

    read: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get Single Purchase"
        */

        console.log('read run');

        if (req.params.id) {
            // Single

            const data = await Purchase.findOne({ _id: req.params.id })
                .populate([
                    { path: 'userId', select: 'username email' },
                    { path: 'firmId', select: 'name image' },
                    'brandId',
                    { path: 'productId', select: 'productId name categoryId' }
                ])

                res.status(200).send({
                    error: false,
                    data
                })
        } else {
            // All

            const data = await res.getModelList(Purchase, {}, [
                { path: 'userId', select: 'username email' },
                { path: 'firmId', select: 'name image' },
                'brandId',
                { path: 'productId', select: 'productId name categoryId' }
            ])

            res.status(200).send({
                error: false,
                details: await res.getModelListDetails(Purchase),
                data
            })
        }
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "name": "Purchase 1"
                }
            }
        */
    },

    delete: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */

    },
}