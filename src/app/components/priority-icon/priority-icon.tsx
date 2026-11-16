import cx from "classix";
import { HiFlag } from "react-icons/hi";
import { PriorityId } from "@domain/priority/priority";

const PRIORITY_LABELS: Partial<Record<PriorityId, string>> = {
  low: "Low",
  high: "High",
};

export const PriorityIcon = ({
  priority,
  size = 18,
}: PriorityIconProps): JSX.Element => (
  <span
    className={cx(
      "flex items-center gap-1",
      priority === "low" && "text-icon-accent-green",
      priority === "medium" && "text-icon-accent-yellow",
      priority === "high" && "text-icon-accent-red"
    )}
  >
    <HiFlag size={size} />
    <span className="text-xs">{PRIORITY_LABELS[priority]!.toUpperCase()}</span>
  </span>
);

interface PriorityIconProps {
  priority: PriorityId;
  size?: number;
}
