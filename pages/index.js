import React, {Component} from 'react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Card, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return {campaigns};
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>This is a test description</a>,
                fluid: true
            }
        });
        return <Card.Group items={items} />;
    }
   
    render(){
        return(
            <Layout>
                <div>
                <h4>Open Campaigns</h4>
                <Button
                        floated="right"
                        content="Create Campaign"
                        icon="add"
                        primary
                        />
                {this.renderCampaigns()}
                    
                </div>
            </Layout>
        );
    }
}

export default CampaignIndex;