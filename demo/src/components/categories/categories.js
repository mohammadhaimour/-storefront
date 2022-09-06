import * as React from 'react';
import { connect } from 'react-redux';
import { changeActiveCategory } from '../../store/categories';
// import { changeActiveCategory } from '../../store/action';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Categories(props) {

    return (

        <section  >
            <AppBar position="static">
                <Tabs className='container'>
                    {
                        props.mycategories.categories.map((element) => {
                            return (
                                <Tab className='tab_content' label={element.displayName} key={element.name} onClick={() => props.changeActiveCategory(element.name)}>
                                    {element.displayName}
                                </Tab>
                            );
                        })
                    }
                </Tabs>
            </AppBar>
        </section>
    );
}

const mapStateToProps = (state) => {
    return { mycategories: state.categories };
}

const mapDispatchToProps = { changeActiveCategory }

export default connect(mapStateToProps, mapDispatchToProps)(Categories)