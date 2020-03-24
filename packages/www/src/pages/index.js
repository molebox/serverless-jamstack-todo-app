import React from 'react';
import {Container, Heading, Button, Flex} from 'theme-ui'

export default () => (
    <Container>
        <Flex sx={{ flexDirection: 'column', padding: 3}}>
        <Heading as="h1">Our Site</Heading>
        <Button 
        sx={{marginTop: 2}}
        onClick={() => {
            alert('clicked')
        }}
        >Login</Button>
        </Flex>
    </Container>
)

// ON VIDEO 5