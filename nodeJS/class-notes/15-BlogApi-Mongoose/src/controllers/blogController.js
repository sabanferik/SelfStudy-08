//*Blog Controller
const { BlogPost } = require("../models/blogModel");

module.exports.BlogPostController = {
  list: async (req, res) => {
    const data = await BlogPost.find({ published: true });

    res.status(200).send({
      error: false,
      blogs: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      blog: data,
    });
  },
  read: async (req, res) => {
    // const data = await BlogPost.findById(req.params.id); //* sadce id secenegini kabul eder.
    // const data = await BlogPost.findOne({published: false });
    const data = await BlogPost.findOne({ _id: req.params.id }); //* diğer seçenekleri de kabul eder.

    res.status(200).send({
      error: false,
      blog: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogPost.findByIdAndUpdate(req.params.id,req.body,{new:true}) // return new data

    res.status(202).send({
      error: false,
      blog: data,
    });
  },

  createMany: async (req, res) => {
    const data = await BlogPost.insertMany(req.body.blogs); //* Çoklu veri create etmek için kullanılan yöntem
    //* çoklu veri gönderilirken veriyi json formatında gönderiyoruz:
    //     {
    //         "blogs": [
    //     {
    //       "title": "Blog Title 7",
    //       "content": "Blog Content 7",
    //       "published": false
    //     },
    //     {
    //       "title": "Blog Title 8",
    //       "content": "Blog Content 8",
    //       "published": false
    //     },
    //     {
    //       "title": "Blog Title 9",
    //       "content": "Blog Content 9",
    //       "published": false
    //     }
    //   ]
    // }
    res.status(201).send({
      error: false,
      blog: data,
    });
  },
};
