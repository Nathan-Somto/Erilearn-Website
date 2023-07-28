const formatLink = (text:string)=>
  {
    const courseLink = '/courses';
    switch (text) {
        case 'About us':
            return 'about'
        case 'Contact':
            return 'contact'
        case 'Product Design':
          return courseLink + "/1";
        case 'Product Management':
          return courseLink + "/4";
        case '3D':
          return courseLink + "/5";
        case 'Full Stack Javascript':
          return courseLink + "/2";
        case 'Full Stack Python':
          return courseLink + "/3";
        default:
           return '';
    }
  }

  export {formatLink}