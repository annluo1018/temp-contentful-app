import heroImg from "./assets/hero.svg";
const Hero = () => {
	return (
		<section className="hero">
			<div className="hero-center">
				<div className="hero-title">
					<h1>Contentful CMS</h1>
					<p>
						If you've previously installed create-react-app globally via npm
						install -g create-react-app, we recommend you uninstall the package
						using npm uninstall -g create-react-app or yarn global remove
						create-react-app to ensure that npx always uses the latest version.
					</p>
				</div>
				<div className="img-container">
					<img src={heroImg} alt="woman and the browser" className="img" />
				</div>
			</div>
		</section>
	);
};
export default Hero;
