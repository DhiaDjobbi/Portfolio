import React, {Component} from 'react';
import {Grid , Cell} from 'react-mdl';

class Landingpage extends Component {
    render() {
        return(
            <div style={{width: '100%' , margin :'auto'}}>
                <Grid className="landing-grid">
                    <Cell col = {12}>
                        <img 
                            src="https://www.shareicon.net/data/512x512/2015/09/18/103157_man_512x512.png"  
                            alt="avatar"
                            className="avatar-img" 
                        />
                        <div className="banner-text">
                            <h1>Full stuck PHP Web developer</h1>
                            <hr/>
                            <p>HTML/CSS  | Bootstrap  | Javascript | Symfony | Python | Java | MySQL</p>
                            <div className="social-links">
                                        {/* LinkedIn */}
                                    <a href="https://www.google.com"  rel="noopener noreferrer"  target="_blank">
                                        <i className="fa fa-linkedin-square"  area-hidden="true"></i>
                                    </a>
                                        {/* Github */}
                                    <a href="https://www.google.com"  rel="noopener noreferrer"  target="_blank">
                                        <i className="fa fa-github-square"  area-hidden="true"></i>
                                    </a>
                                        {/* stackoverflow */}
                                    <a href="https://www.google.com"  rel="noopener noreferrer"  target="_blank">
                                        <i className="fa  fa-stack-overflow"  area-hidden="true"></i>
                                    </a>
                                        {/* facebook */}
                                    <a href="https://www.google.com"  rel="noopener noreferrer"  target="_blank">
                                        <i className="fa fa-facebook-square"  area-hidden="true"></i>
                                    </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landingpage;