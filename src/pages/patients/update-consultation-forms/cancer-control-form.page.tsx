import React, { useEffect } from "react";
import { Card, Skeleton } from "antd";
import CancerControlForm from "../../../components/shared/consultation-forms/cancer-control-form.component";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { getOneAppointment } from "../../../redux/appointments/appointments.slice";
import moment from "moment";

const CancerControlFormPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const appointment = useAppSelector((state) => state?.appointments?.current);

	useEffect(() => {
		if (!id) return;
		dispatch(getOneAppointment(id));
	}, [dispatch, id]);

	return (
		<Skeleton active loading={!appointment}>
			<Card
				title={
					<div className="row align-items-flex-center">
						{" "}
						<Link to="/patients/my-schedules">
							<ArrowLeftOutlined className="mr-1" />
						</Link>
						Cancer Control & Prevention Program
					</div>
				}
			>
				<p className="mb-1">
					{" "}
					Consultation Date & Time:{" "}
					{moment(appointment?.schedule?.consultationDate).format(
						"MMMM DD, YYYY"
					)}{" "}
					&nbsp;{" "}
					{moment(appointment?.schedule?.consultationTime).format(
						"hh:mm a"
					)}{" "}
				</p>
				<p>
					Doctor Remarks: <br /> <br />{" "}
					<i className="text-red">
						{" "}
						{!appointment?.remarks
							? "No remarks yet."
							: appointment?.remarks}{" "}
					</i>
				</p>
				<CancerControlForm
					initialValues={{
						...appointment?.consultationForm,
					}}
				/>
			</Card>
		</Skeleton>
	);
};

export default CancerControlFormPage;