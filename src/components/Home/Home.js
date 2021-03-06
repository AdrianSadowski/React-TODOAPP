import React from 'react';
import ListLink from '../ListLink/ListLink';
import styles from './Home.scss';
import PropTypes from 'prop-types';


class Home extends React.Component {
  render() {
    const { title, subtitle, lists} = this.props;

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
        ))}
      </main>
    );
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
    searchString: PropTypes.string,
  }
}

export default Home;
