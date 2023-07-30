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
        case 'Data Science':
          return courseLink + "/6";
        case 'Get Started':
          return 'https://www.bit.ly/ERILEARN';
        case 'Faq':
          return 'faqs';
        default:
           return '';
    }
  }
  const handleEnrollClick = () => {
    window.location.href = 'https://www.bit.ly/ERILEARN';
  };
  export {formatLink, handleEnrollClick}