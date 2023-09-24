import React from 'react';

// react-relay
import { useLazyLoadQuery } from 'react-relay';
import { MyProfileQuery, MyProfileQuery$data } from './__generated__/MyProfileQuery.graphql';

// layout components
import { DrawerContext, HeaderContext, StyledAppbar } from '../Layout';

// mui components
import { Avatar, Box, Collapse, Container, Stack, Toolbar } from '@mui/material';
import Hamburger from '../components/Hamburger';
import DrawerLayout from '../DraweredLayout';

const graphql = require("babel-plugin-relay/macro");

interface ModProfileProps {

}

interface ModProfileState {
    myAccounts?: MyProfileQuery$data["myAccounts"];
    selected?: number;
    newAccountForm?: boolean;
}

class ModProfile extends React.Component<ModProfileProps, ModProfileState> {

    constructor(props: ModProfileProps) {
        super(props);
        this.state = {
            myAccounts: undefined,
            selected: undefined,
            newAccountForm: false
        };
    }

    DataFecthLayer = () => {
        const data = useLazyLoadQuery<MyProfileQuery>(
            graphql`
                query MyProfileQuery {
                    myAccounts {
                        edges {
                            node {
                                id
                                name
                                seoTags
                                isActive
                                isVerified
                                verifiedEmail
                                category
                                cover
                                icon
                                avrRating
                                numOfReviews
                                reviews {
                                    edges {
                                        node {
                                        ...Review_data
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            {},
            { fetchPolicy: "store-or-network" }
        );
        const { isDrawerOpen, toggleDrawer } = React.useContext(DrawerContext);
        const { toggleHeader } = React.useContext(HeaderContext);
        const { myAccounts, selected } = this.state;

        React.useEffect(() => {
            toggleHeader(false);

            return () => toggleHeader(true);
        }, []);

        React.useEffect(() => {
            this.setState({ myAccounts: data?.myAccounts });
        }, [data]);

        const selectAccount = React.useCallback((index: number) => {
            this.setState({ selected: index });
            toggleDrawer(false);
        }, []);

        return (
            <StyledAppbar >

                <Toolbar sx={{ justifyContent: "space-between", gap: 1 }} >
                    {selected === undefined ?
                        <Hamburger
                            open={isDrawerOpen}
                            onClick={() => toggleDrawer()}
                            children={<><span /><span /><span /></>}
                            sx={{ ml: "auto" }}
                        /> :
                        <Avatar
                            onClick={() => toggleDrawer()}
                            src={data?.myAccounts?.edges?.[selected]?.node?.icon ?? undefined}
                            children={data?.myAccounts?.edges?.[selected]?.node?.icon ? undefined : data?.myAccounts?.edges?.[selected]?.node?.name?.split(" ").map(x => x.charAt(0))}
                        />
                    }
                </Toolbar>

                <Collapse in={isDrawerOpen} >
                    <Toolbar>
                        <Box sx={{ flex: 1, overflowX: "scroll", overflowY: "hidden", alignSelf: "center" }} maxWidth="md" >
                            <Stack py={2} direction="row" >
                                {myAccounts?.edges?.map((edge, index) => (
                                    <Avatar
                                        key={edge?.node?.id}
                                        src={edge?.node?.icon ?? undefined}
                                        children={edge?.node?.icon ? undefined : edge?.node?.name?.split(" ").map(x => x.charAt(0))}
                                        onClick={() => selectAccount(index)}
                                    />
                                ))}
                            </Stack>
                        </Box>
                    </Toolbar>
                </Collapse>

            </StyledAppbar>
        )
    }

    C = ({ children }: React.PropsWithChildren<{}>) => {
        return (
            <Container
                sx={{ my: "100px" }}
                children={children}
                maxWidth="md"
            />
        )
    }

    Account = () => {
        return (
            <Stack direction="column" gap={1}>

            </Stack>
        )
    }

    NewAccountForm = () => {
        return (
            <>

            </>
        )
    }

    render() {
        const { DataFecthLayer, Account, C, NewAccountForm } = this
        const { newAccountForm } = this.state;

        return (
            <DrawerLayout>
                <DataFecthLayer />
                <C >
                    <Account />
                    {newAccountForm && <NewAccountForm />}
                </C>
            </DrawerLayout>
        );
    }

}

export default ModProfile;
