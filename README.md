# @bucky24/react-canvas-ui

@bucky24/react-canvas-ui is a UI management system built on top of `@bucky24/react-canvas`. It is designed to provide an easy way to create dymanic UI that works on top of other elements in a Canvas.

This should not be considered a replacement for HTML elements, and if the opportunity provides, HTML/CSS should be used instead of this library, as it will be more performant. However this library should work more seamlessly with other items drawn to a Canvas.

# Elements

Unless otherwise specificed, all celements take the properties of a Position as props.

## MainPanel

In order for elements to properly handle their dimensions, they must be inside a component that provides a Position to them. The MainPanel is a special Panel that takes up the entire size of the Canvas, and allows for its children to properly use percentages and other dynamic calculations with their positions.

### Additional Props

All properties of the Panel are valid properties for the MainPanel.

## Panel

The Panel is the main workhorse of the UI system. It is essentially a way to quickly subdivide and group elements so they can be moved and manipulated easily.

### Additional Props

| Name | Type | Description | 
|------|----|----|
| debug | boolean | If true, draws a rectangle around the bounds of the Panel |
| children | See Children section | Children to draw, constrained to this Panel's Position |

### Children

Panel can nest other Panels, and any React Canvas UI element. If using elements from React Canvas, the `Raw` element should be used to wrap them (see below). You can put any React Canvas compatible element, but without the `Raw` wrapper, they may not conform to the Panel's Position.
## Button

A very crude button that right now is just a rectangle with no functionality.

## Raw

The Raw component can wrap an existing React Canvas element, injecting appropriate coordinates and dimensions so that the element conforms to its containing Panel. The Position you pass into the Raw element is what is used to generate the dimensions and coordinates of the child. So for example if you passed a height of "50%" into Raw, the child will be given a height of 50% that is 50% of the parent, just as any noremal React Canvas UI element would.

### Additional Props

| Name | Type | Description | 
|------|----|----|
| noDims | boolean | If true, sets the x2 and y2 props of the child. If false (default), sets the width and height props |
| children | Node | Should be a single React Canvas element |

# Classes
## Position

The position object contains information on the position of an element as well as its dimensions.


| Name | Type | Description | 
|------|----|----|
| x | Coord | The x position of the element |
| y | Coord | The y position of the element |
| width | Dimension | The width of the element |
| height | Dimension | The height of the element |

## Coord

### Numeric value

If a numeric value is given for a Coord, this is taken as a flat offset in pixels from the appropriate border of the parent.

## Dimension

### Numeric value

If a numeric value is given for a Dimension, this is taken as a flat size in pixels, regardless of parent dimensions.

### Percentage

If a percentage in positive whole numbers (including zero) is given, the element will multiple the parent's corresponding dimension by this percentage and use that as its final size.