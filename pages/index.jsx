import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { loadData } from '../store/actions';

const Index = () => {
    return (
        <>
            <h1> hello 56 kg 胖仔 </h1>
            <Link href="/about">
                <a> go to about page </a>
            </Link>
        </>
    );
};

Index.getInitialProps = (props) => {
    const { store, isServer } = props.ctx;
    // console.log(store.getState().defultData);
    // if (!store.getState().defultData) {
    store.dispatch(loadData());
    // }
    return { isServer };
};

export default connect()(Index);
