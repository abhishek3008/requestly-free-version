import { useSelector } from "react-redux";
import { getUserAttributes } from "store/selectors";
import { getUserAuthDetails } from "store/slices/global/user/selectors";
import { featureLimits } from "./featureLimitTypes";
import { useDispatch } from "react-redux";
import { globalActions } from "store/slices/global/slice";
import { FeatureLimitType } from "./types";
import { getPlanNameFromId } from "utils/PremiumUtils";
import { PRICING } from "features/pricing";

const premiumPlansToCheckLimit = [PRICING.PLAN_NAMES.LITE, PRICING.PLAN_NAMES.BASIC, PRICING.PLAN_NAMES.BASIC_V2];

export const useFeatureLimiter = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserAuthDetails);
  const userAttributes = useSelector(getUserAttributes);
  const isUserPremium = true;
  const userPlan = PRICING.PLAN_NAMES.ENTERPRISE;

  const checkFeatureLimits = () => {
    if (user.isLimitReached) {
      dispatch(globalActions.updateUserLimitReached(false));
    }
  };

  const checkIfFeatureLimitReached = (featureLimitType: FeatureLimitType, checkType: "breached" | "reached") => {
    return false;
  };

  const getFeatureCurrentValue = (featureLimitType: FeatureLimitType) => {
    return 0;
  };

  const getFeatureLimitValue = (featureLimitType: FeatureLimitType) => {
    if (
      [
        FeatureLimitType.response_rule,
        FeatureLimitType.request_rule,
        FeatureLimitType.script_rule,
        FeatureLimitType.add_new_rule_pair,
        FeatureLimitType.graphql_resource_type,
        FeatureLimitType.dynamic_response_body,
        FeatureLimitType.dynamic_request_body,
        FeatureLimitType.share_rules,
        FeatureLimitType.free,
      ].includes(featureLimitType)
    ) {
      return true;
    }
    return Infinity;
  };

  const getIsFeatureEnabled = (featureLimitType: FeatureLimitType) => {
    return true;
  };

  return {
    checkFeatureLimits,
    getFeatureLimitValue,
    getIsFeatureEnabled,
    checkIfFeatureLimitReached,
  };
};
