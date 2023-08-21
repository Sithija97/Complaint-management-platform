import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  container: {
    margin: 10,
  },
  text: {
    fontSize: 12,
  },
});

export const PDFComponent = ({ content }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.text}>{content}</Text>
      </View>
    </Page>
  </Document>
);
