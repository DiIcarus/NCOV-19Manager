import React, { Component } from "react";
import * as s__ from "./style";
import * as s1__ from "./style1";

import SendIcon from '@material-ui/icons/Send';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
class Footer extends Component{
  render() {
    return (
      // <s__.Container>
      //   <s__.IconArea>
      //     <img src="https://deephub.vn/wp-content/uploads/2019/03/light_logo_with_textAsset-9@128.png"/>
      //   </s__.IconArea>
      //   <s__.MenuArea>
      //     <s__.MenuChild><s__.MenuLink href="https://deephub.vn/">HOME</s__.MenuLink></s__.MenuChild>
      //     <s__.MenuChild><s__.MenuLink href="https://deephub.vn/projects/">PROJECT</s__.MenuLink></s__.MenuChild>
      //     <s__.MenuChild><s__.MenuLink href="https://deephub.vn/join-us/">JOIN US</s__.MenuLink></s__.MenuChild>
      //     <s__.MenuChild><s__.MenuLink href="https://deephub.vn/contact/#">BLOG</s__.MenuLink></s__.MenuChild>
      //   </s__.MenuArea>
      //   <s__.LeftArea>
      //     <FacebookIcon /><MailOutlineIcon/>
      //   </s__.LeftArea>
      // </s__.Container>
      <s1__.Footer>
        <s1__.Container>
          <div>
            <s1__.BrandArea>
              <img src="https://deephub.vn/wp-content/uploads/2019/03/light_logo_with_textAsset-9@128.png"/>
            </s1__.BrandArea>
            <s1__.MenuArea>
              <div>
                <s1__.LinkMenu>HOME</s1__.LinkMenu>
                <s1__.LinkMenu>PROJECTS</s1__.LinkMenu>
                <s1__.LinkMenu>JOIN US</s1__.LinkMenu>
                <s1__.LinkMenu>BLOG</s1__.LinkMenu>
              </div>
            </s1__.MenuArea>
            <s1__.IconArea>
              <div>
                <s1__.LinkIcon href="https://www.facebook.com/deephubteam"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></s1__.LinkIcon>
                <s1__.LinkIcon href="mailto:info@deephub.vn"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg></s1__.LinkIcon>
              </div>
            </s1__.IconArea>
          </div>
        </s1__.Container>
      </s1__.Footer>
    );
  }
}

export default Footer;
