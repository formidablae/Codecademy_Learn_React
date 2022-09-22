import React from "react";
import QuizNavBar from "./QuizNavBar";
import { questions } from "./dataModel";

export default function App() {
    return <QuizNavBar questions={questions} />;
}
