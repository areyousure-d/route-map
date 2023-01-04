import { Col, Layout, Row } from "antd";
import { ReactNode } from "react";
import styles from "./basic-layout.module.css";

type Props = {
  directions: ReactNode;
  map: ReactNode;
};

export const BasicLayout = ({ directions, map }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Layout.Content className={styles.content}>
        <Row className={styles.row}>
          <Col span={12} className={styles["directions-col"]}>
            {directions}
          </Col>

          <Col span={12} className={styles["map-col"]}>
            {map}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
