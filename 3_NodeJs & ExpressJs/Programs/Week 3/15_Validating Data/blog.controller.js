// Please don't change the pre-written code

export const validateBlog = (req, res) => {
  // Write your code here
  const { title, description, image } = req.body;
  title.trim();
  description.trim();
  image.trim();
    let errors = [];
    if (!title) {
      errors.push('Title field must not be empty.');
    } 
    if(title.length<3){
      errors.push('Title field shuold contain atleast 3 character.');
    }
    if (!description) {
      errors.push('Description field should not be empty.');
    }
    if(description.length<10){
      errors.push('Description field shuold contain atleast 10 character.');
    }
    try {
       new URL(image);
    } catch (err) {
      errors.push('Image URL must be a valid URL.');
    }

    if (errors.length > 0) {
       res.status(401).render('addBlog', {
        errors,
        success: false
      });
    }
  
  res.status(201).render("addBlog", { errors: null, success: true
    });
};
export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
