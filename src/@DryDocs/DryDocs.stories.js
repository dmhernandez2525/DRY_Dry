import React from "react";
import { storiesOf } from "@storybook/react";

// quick-start
import DryDocs from "./DryDocs";
import QuickReadme from "../docs/quick-start/README.md";
import QuickComponents from "../docs/quick-start/components.md";

// Contributing
import Creating from "../docs/contributing/creating.md";
import Documentation from "../docs/contributing/documentation.md";
import Release from "../docs/contributing/release.md";
import Review from "../docs/contributing/review.md";
import Setup from "../docs/contributing/setup.md";
import Storybook from "../docs/contributing/storybook.md";
import Styling from "../docs/contributing/styling.md";
import Testing from "../docs/contributing/testing.md";

// Testing
import TestingS from "../docs/testing/local-integration-testing.md";

// Issues
import Issues from "../docs/issues.md";

storiesOf("Docs/QuickStart", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  // .add("quick-start", () => <DryDocs />)
  .add("Setup", () => <></>, {
    readme: {
      content: QuickReadme
    }
  })
  .add("Components", () => <></>, {
    readme: {
      content: QuickComponents
    }
  });

storiesOf("Docs/Contributing", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })
  .add("Setup", () => <></>, {
    readme: {
      content: Setup
    }
  })
  .add("Creating", () => <></>, {
    readme: {
      content: Creating
    }
  })
  .add("Styling", () => <></>, {
    readme: {
      content: Styling
    }
  })
  .add("Storybook", () => <></>, {
    readme: {
      content: Storybook
    }
  })
  .add("Testing", () => <></>, {
    readme: {
      content: Testing
    }
  })

  .add("Documentation", () => <></>, {
    readme: {
      content: Documentation
    }
  })

  .add("Review", () => <></>, {
    readme: {
      content: Review
    }
  })
  .add("Release", () => <></>, {
    readme: {
      content: Release
    }
  });

storiesOf("Docs/Testing", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })

  .add("TestingS", () => <></>, {
    readme: {
      content: TestingS
    }
  });

storiesOf("Docs/Issues", module)
  .addParameters({
    readme: {
      codeTheme: "atom-dark"
    }
  })

  .add("Issues", () => <></>, {
    readme: {
      content: Issues
    }
  });
