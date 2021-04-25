import React from "react";
import { Card } from "antd";
import Nutritionist from "../../../components/shared/consultation-forms/nutritionist-form.component";

const NutritionistPage: React.FC = () => {
	return (
		<div>
			<Card title="Nutritionist Form">
				<Nutritionist />
			</Card>
		</div>
	);
};

export default NutritionistPage;
