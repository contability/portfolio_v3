export interface SectionNavProps {
  items: Array<{
    label: string;
    href: string;
    itemDesc?: string;
  }>;
  isLink?: boolean;
}
