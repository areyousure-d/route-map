import { notification } from "antd";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { mapSelectors } from "@/store/map";

export const useNotifications = () => {
  const isLoading = useSelector(mapSelectors.isLoading);
  const isError = useSelector(mapSelectors.isError);
  const route = useSelector(mapSelectors.route);

  useEffect(() => {
    if (isLoading) {
      notification.open({
        key: "loading",
        message: "Loading",
        description: "Route is loading",
        placement: "bottomRight",
      });
    } else {
      notification.destroy("loading");
    }
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "Error",
        description: "Something wrong",
        placement: "bottomRight",
        duration: 0,
      });
    }
  }, [isError]);

  useEffect(() => {
    if (route.length > 0) {
      notification.success({
        message: "Success",
        description: "Route loaded successfully",
        placement: "bottomRight",
        duration: 1,
      });
    }
  }, [route]);
};
