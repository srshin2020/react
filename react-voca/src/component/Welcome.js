// css module import : 해당 파일에마 적용됨
import styles from './Welcome.module.css';

// name은 호출측에서는 state이므로 값변경시 화면 자동 업데이트됨!
export default function Welcome({ name }) {
    return <div className={styles.box}>Welcome! {name}</div>;
}
