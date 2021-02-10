import React,{Component} from 'react';
import { MDBContainer,  MDBFooter } from 'mdbreact';

class FooterBar extends Component {
  
  render() {
    const style = {
      backgroundColor: '#202020',
      color: 'white'
    }
    return (
      <MDBFooter style={style} className="font-small pt-4 mt-4" fixed="true">
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            Random copyright
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default FooterBar;