import React from 'react';
import "./style.css";
const photoUrl = 'https://meetmydoc-img.s3.ap-south-1.amazonaws.com/IMG_20220505_160140.jpg'; // Replace with your S3 URL

const About = () => {
  return (
    <>
	 <div>
      <h2>Doctor Profile</h2>
      <img src={photoUrl} alt="Doctor" style={{ width: '200px', height: '200px' }} />
    </div>
     <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="http://gaadiexpert.com/">Brand</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
      
      <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact Us</a></li>
        
      </ul>
    </div>
      </div>
  </nav>
<div class="image-aboutus-banner"> 
   <div class="container">
    <div class="row">
        <div class="col-md-12">
         <h1 class="lg-text">About Us</h1>
         <p class="image-aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </div>
    </div>
</div>
</div>


<div class="bread-bar">
    	<div class="container">
        	<div class="row">
            	<div class="col-md-8 col-sm-6 col-xs-8">
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">About Us</li>
                    </ol>
            	</div>
                <div class="col-md-4 col-sm-6 col-xs-4">
                </div>
            </div>
      	</div>
    </div>
<div class="aboutus-secktion paddingTB60">
    <div class="container">
        <div class="row">
                	<div class="col-md-6">
                    	<h1 class="strong">Who we are and<br/>what we do</h1>
                        <p class="lead">This is the world's leading <br/>easy and quick </p>
                    </div>
                    <div class="col-md-6">
                    	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
                    </div>
</div>
    </div>
</div>
<div class="container team-sektion paddingTB60">
	<div class="row">
		<div class="site-heading text-center">
						<h3>Our Team</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua. Ut enim ad minim </p>
						<div class="border"></div>
					</div>
	</div>
	<div class="row">
		<div class="col-md-4 team-box">
		    <div class="team-img thumbnail">
		        <img src="https://images.pexels.com/photos/462680/pexels-photo-462680.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
		    <div class="team-content">    
		        <h3>Philip Freeman</h3>
		        <div class="border-team"></div>
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
		        <div class="social-icons"> 
               <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
               <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
	        </div>
		    </div>
		</div>
	</div>
	    <div class="col-md-4 team-box">
		    <div class="team-img thumbnail">
		        <img src="https://images.pexels.com/photos/567459/pexels-photo-567459.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
		    <div class="team-content">    
		        <h3>David Smith</h3>
		        <div class="border-team"></div>
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
		        <div class="social-icons"> 
               <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
               <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
	        </div>
		    </div>
		</div>
	</div>
	    <div class="col-md-4 team-box">
		    <div class="team-img thumbnail">
		        <img src="https://images.pexels.com/photos/325682/pexels-photo-325682.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/>
		    <div class="team-content">    
		        <h3>Robert D'costa</h3>
		        <div class="border-team"></div>
		        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
		        <div class="social-icons"> 
               <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
               <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
	        </div>
		    </div>
		</div>
	</div>
	    
</div>
</div>
<div class="cta-sektion cta-padding35">
    <div class="container">
        <div class="row">
            <div class="col-md-9 col-sm-9 col-xs-12">
                <h3><span class="glyphicon glyphicon-cog "></span> <b>Homes for sale?</b> Explore properties like a pro.</h3>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-12 Tpadding10">
                <button type="button" class="btn btn-primary site-btn">Start Right Now</button>
            </div>
        </div>
    </div>
</div>
<div class="footer-section">
    <div class="footer">
	<div class="container">
		<div class="col-md-4 footer-one">
			<h5>About Us </h5>
		    <p>Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		    	<div class="social-icons"> 
               <a href="https://www.facebook.com/"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
               <a href="https://twitter.com/"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
	        </div>	
		</div>
		<div class="col-md-3 footer-two">
		    <h5>Information </h5>
		    <ul>
									<li><a href="maintenance.html">Maintenance Tips</a></li>
									<li><a href="contact.html">Locations</a></li>
									<li><a href="about.html">Testimonials</a></li>
									<li><a href="about.html">Careers</a></li>
									<li><a href="about.html">Partners</a></li>
								</ul>
		</div>
		<div class="col-md-3 footer-three">
		    <h5>Helpful Links </h5>
		    <ul>
									<li><a href="maintenance.html">Maintenance Tips</a></li>
									<li><a href="contact.html">Locations</a></li>
									<li><a href="about.html">Testimonials</a></li>
									<li><a href="about.html">Careers</a></li>
									<li><a href="about.html">Partners</a></li>
								</ul>
		</div>
		<div class="col-md-2 footer-four">
		    <h5>Helpful Links </h5>
		    <ul>
									<li><a href="maintenance.html">Maintenance Tips</a></li>
									<li><a href="contact.html">Locations</a></li>
									<li><a href="about.html">Testimonials</a></li>
									<li><a href="about.html">Careers</a></li>
									<li><a href="about.html">Partners</a></li>
								</ul>
		</div>
		
		<div class="clearfix"></div>
	</div>
</div>
    <div class="footer-bottom">
        <div class="container">
					<div class="row">
						<div class="col-sm-12 text-center ">
							<div class="copyright-text">
								<p>CopyRight © 2017 Digital All Rights Reserved</p>
							</div>
						</div> 
						
					</div>
				</div>
    </div>
</div>  
    </>
  );
};

export default About;