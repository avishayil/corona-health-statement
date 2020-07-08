# Corona Health Statement

Corona Health Statement is a simple React web application useful for rendering forms suitable for sharing kindergardens / schools during the COVID-19 pandemic.

## Usage

The app supports the following attributes via query string:

Attribute        | Type            | Description
---------------- | --------------- | -----------
`childName`      | string          | Child's name
`childId`        | string          | Child's personal ID number
`parentName`     | string          | Parent's name
`parentId`       | string           | Parents's personal ID number

## Tech

Corona Health Statement uses a number of awesome open source projects to work properly:

* [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) - Bootstrap 4 components built with React. We are using this library to render the form components that are powering this application.
* [html-to-image](https://github.com/bubkoo/html-to-image) - Generates an image from a HTML node using HTML5 canvas. We are using the capabilities of this library to take a screenshot of the screen and download it as an image, available for sharing.
* [react-signature-pad-wrapper](https://github.com/michaeldzjap/react-signature-pad-wrapper) - A React wrapper for signature pad. We are using this technology to capture the user signature straight on the form instead of importing it from external source.

## Contributing

Contributions are welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md) if you like to contribute to this application.