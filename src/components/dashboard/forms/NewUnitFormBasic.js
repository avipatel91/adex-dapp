import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from 'actions/itemActions'
import { ItemsTypes, AdTypes, Sizes } from 'constants/itemsTypes'
import NewItemHoc from './NewItemHocStep'
import Dropdown from 'react-toolbox/lib/dropdown'
import Input from 'react-toolbox/lib/input'
import Translate from 'components/translate/Translate'
import ImgForm from './ImgForm'
import { Grid, Row, Col } from 'react-flexbox-grid'
import theme from './theme.css'

class NewUnitForm extends Component {

    render() {
        let item = this.props.item
        return (
            <div>
                <Input
                    type='text'
                    label={this.props.t('ad_url', { isProp: true })}
                    value={item._meta.ad_url}
                    onChange={this.props.handleChange.bind(this, 'ad_url')}
                    maxLength={1024} />
                <div>
                    <Grid fluid className={theme.grid}>
                        <Row middle='md'>
                            <Col sm={12} lg={6}>
                                <Dropdown
                                    onChange={this.props.handleChange.bind(this, 'adType')}
                                    source={AdTypes}
                                    value={item._meta.adType}
                                    label={this.props.t('adType', { isProp: true })}
                                />
                            </Col>
                            <Col sm={12} lg={6}>
                                <Dropdown
                                    onChange={this.props.handleChange.bind(this, 'size')}
                                    source={Sizes}
                                    value={item._meta.size}
                                    label={this.props.t('size', { isProp: true })}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <ImgForm label={this.props.t(this.props.imgLabel || 'img', { isProp: !this.props.imgLabel })} imgSrc={item._meta.img.tempUrl || 'nourl'} onChange={this.props.handleChange.bind(this, 'img')} />
            </div>
        )
    }
}

NewUnitForm.propTypes = {
    actions: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    // newItem: PropTypes.object.isRequired,
    title: PropTypes.string,
    // items: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    // console.log('mapStateToProps Campaigns', state)
    return {
        account: state.account,
        // newItem: state.newItem[ItemsTypes.AdUnit.id],
        // items: state.items[ItemsTypes.AdUnit.id],
        itemType: ItemsTypes.AdUnit.id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const ItemNewUnitForm = NewItemHoc(NewUnitForm)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Translate(ItemNewUnitForm))