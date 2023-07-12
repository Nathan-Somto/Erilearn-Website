const formatLink = (text:string)=>
  {
    const courseLink = 'courses';
    switch (text) {
        case 'About us':
            return 'about'
        case 'Contact':
            return 'contact'
        case 'Product Design':
          return courseLink + "";
        case 'Product Management':
          return courseLink + "";
        case '3D':
          return courseLink + "";
        case 'Full Stack Javascript':
          return courseLink + "";
        case 'Full Stack Python':
          return courseLink + "";
        default:
           return '';
    }
  }

  export {formatLink}