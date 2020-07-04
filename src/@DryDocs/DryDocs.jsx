import React from "react";

const DryDocs = () => {
  return (
    <div>
      <div>
        <h2>Contributing</h2>
        <div>
          <h3>Using NPM Link</h3>
          <ul>
            <h3> NOTE: our package name is DRY</h3>
            <li>
              First, npm link in a package folder it will create a symlink in
              the global folder
            </li>
            <li>
              {
                "{prefix}/lib/node_modules/<package> will link to the package where the npm link command was executed. It will also link any bins in the package to {prefix}/bin/{name}."
              }
            </li>
            <li>
              Next, in some other location, <code>npm link package-name</code>{" "}
              will create a symbolic link from globally-installed package-name
              to node_modules/ of the current folder.
            </li>
          </ul>
        </div>
        <div>
          <h2>Overview of standers</h2>
          <div>
            <h2>Testing</h2>
            <ul>
              <li>Jest</li>
              <li>React Testing library</li>
              <li>95 % Testing coverage</li>
            </ul>
          </div>
          <div>
            <h2> Version control standards</h2>
            <ul>
              <li>Master</li>
              <li>QA</li>
              <li>Development</li>
              <li>Feature/Bug</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>Readme</h3>
        </div>
        <div>
          <h3>Portable</h3>
        </div>
        <div>
          <h3>ChangeLog</h3>
        </div>
        <div>
          <h3>Writing StoryBook Story</h3>
        </div>
      </div>
      <div>
        <h2>Permissions</h2>
        <ul>
          <li>Npm account</li>
          <li>Artifactory</li>
          <li>log into</li>
        </ul>
      </div>
    </div>
  );
};

export default DryDocs;
