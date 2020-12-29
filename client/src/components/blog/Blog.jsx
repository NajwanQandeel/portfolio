import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://najwanqandeel.blogspot.com/2020/12/last-day-in-thesis-project.html" className="blog-img"><img src="https://najwanqandeel.blogspot.com/2020/12/last-day-in-thesis-project.html" className="img-responsive" alt="" /></a>
						<div className="desc">
							<span> last day in thesis project </span>
							<h3><a href="https://najwanqandeel.blogspot.com/2020/12/if-you-could-own-rbk-for-one-day-what.html">If you could Own RBK for one day what the changes that you will make?</a></h3>
							<p></p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="" /></a>
						<div className="desc">
							<span><small> </small> | <small>  </small> | <small> <i className="icon-bubble3" /> </small></span>
							<h3><a href="https://najwanqandeel.blogspot.com/2020/12/values.html">Values</a></h3>
							<p></p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="" /></a>
						<div className="desc">
							<span><small> </small> | <small></small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://najwanqandeel.blogspot.com/2020/12/goals.html">goals</a></h3>
							<p></p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}