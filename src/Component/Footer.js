import React, {Component} from 'react';

class Footer extends Component {
    render() {
	    return (
             <div id="footer">
            <a href="https://github.com/alyssaxuu/flowy/" target="_blank">GitHub</a>
            <span>·</span>
            <a href="https://twitter.com/alyssaxuu/status/1199724989353730048" target="_blank">Twitter</a>
            <span>·</span>
                <a href="https://alyssax.com" target="_blank"><p>Made with</p><img src="assets/heart.svg"/><p>by</p> Alyssa X</a>
        </div> 
	     );
    }
}
export default Footer;