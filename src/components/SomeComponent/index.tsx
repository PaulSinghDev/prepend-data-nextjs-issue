import styles from "@/components/SomeComponent/SomeComponent.module.scss";

export const SomeComponent: React.FC = () => {
  return (
    <div className={styles["some-class"]}>
      Hey
      <div className={styles.hey}>YO</div>
    </div>
  );
};
