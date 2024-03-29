import React from 'react';

class About extends React.Component{
	render() {
		return (
			<div className='container-fluid'>
				<h1 className= 'pageName'> About Us </h1>
				<div className= 'container aboutPage'>
					<div className='row'>
						<div className='col-lg-4' id='f1_container'>
							<div id="f1_card" className="shadow">
								<div className="front face">
									<img className=" img-fluid" src="/wolf.png" />
									<h3 class="card-title">Member name: Pham Viet Cuong</h3> 
								</div>
								<div className="back face center">
									<p>After playing werewolves boardgame for 5 years,
								we realized the struggle of the moderator having to
								remember all players' roles as well as their actions during the night time.
								This website was built to support the moderator in terms of 
								setting up gameplay and managing players.</p>
								</div>
							</div>
						</div>

						<div className='col-lg-4' id='f1_container'>
							<div id="f1_card" className="shadow">
								<div className="front face">
									<img className=" img-fluid" src="/wolf.png" />
									<h3 class="card-title">About the product</h3> 
								</div>
								<div className="back face center">
									<p>After playing werewolves boardgame for 5 years,
								we realized the struggle of the moderator having to
								remember all players' roles as well as their actions during the night time.
								This website was built to support the moderator in terms of 
								setting up gameplay and managing players.</p>
								</div>
							</div>
						</div>
						
						<div className='col-lg-4' id='f1_container'>
							<div id="f1_card" className="shadow">
								<div className="front face">
									<img className=" img-fluid" src="/wolf.png" />
									<h3 class="card-title">Member name: Nguyen Van Nhi</h3> 
								</div>
								<div className="back face center">
									<p>After playing werewolves boardgame for 5 years,
								we realized the struggle of the moderator having to
								remember all players' roles as well as their actions during the night time.
								This website was built to support the moderator in terms of 
								setting up gameplay and managing players.</p>
								</div>
							</div>
						</div>
						

					</div>

				</div>
			</div>
		)
	}
}

export default About
