import { Col, Layout, Row } from "antd";
import { ReactNode } from "react";
import styles from "./basic-layout.module.css";

interface Props {
  menu: ReactNode;
  map: ReactNode;
}

export const BasicLayout = ({ menu, map }: Props) => {
  return (
    <Layout className={styles.layout}>
      <Layout.Content className={styles.content}>
        <Row className={styles.row}>
          <Col span={12} className={styles["menu-col"]}>
            {menu}
          </Col>

          <Col span={12} className={styles["map-col"]}>
            {map}
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
