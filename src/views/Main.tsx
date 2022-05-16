import React from "react";
import { Container, ScrollView, Text, Title } from "../styles/Main";
import { Today } from "../utils/DateCalculator";

const Main = () => {

    const today = Today()

    return (
        <Container>
            <Title>{today}</Title>
            <ScrollView>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
                <Text>ScrollView</Text>
            </ScrollView>
        </Container>
    )
}

export default Main;