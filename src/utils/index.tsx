const formatLink = (text:string)=>
  {
    switch (text) {
        case 'About us':
            return 'about'
        case 'Contact':
            return 'contact'
        default:
           return '';
    }
  }

  export {formatLink}