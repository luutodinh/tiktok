import classNames from "classnames/bind"
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types'
import Image from '~/component/Image'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('image')} src={data.avatar} alt="Account" />
            <div className={cx('info')} >
                <h4 className={cx('name')}>
                {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={ faCheckCircle } />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object
}

export default AccountItem;