import "./avatar.css";
import Typing from "./type";

export default function AvatarCard() {
	return (
		<div className="card" id="Aboutme">
			<div className="tools">
				<div className="circle">
					<span className="red box"></span>
				</div>
				<div className="circle">
					<span className="yellow box"></span>
				</div>
				<div className="circle">
					<span className="green box"></span>
				</div>
			</div>
			<div className="card__content">
				<Typing />
			</div>
		</div>
	);
}
