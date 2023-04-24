// librari
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const DeletedButtom = ({
  onClick,
}: {
  onClick:
    | (React.MouseEventHandler<HTMLAnchorElement> &
        React.MouseEventHandler<HTMLButtonElement>)
    | undefined;
}) => {
  return <Button icon={<DeleteOutlined />} onClick={onClick} />;
};

export default DeletedButtom;
