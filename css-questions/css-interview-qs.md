# 1. What does a Float do?
- Float pushes an element to the sides of a page with text wrapped around it. You can create an entire page or smaller area using Float. If the size of a floated element changes, the text around it will re-flow to accommodate.
- You can Float: Left, Right, None, or Inherit

- if you set, 'float: left;' for an image, it will move to the left until the margin, padding or border of another block-level element is reached. The normal flow will wrap around on the right side.

````
<style>
  .floatContainer{
       width: 200px;
       height: 100px;
       border: 2px solid purple;
  }
  .box{
       float: left;
       width: 50px;
       height: 30px;
       border: 2px solid gray;
       margin: 5px;
  }
</style>
<div class="container">
   <div class="box"><span>1</span></div>
   <div class="box"><span>2</span></div>
   <div class="box"><span>3</span></div>
   <div class="box"><span>4</span></div>
   <div class="box"><span>5</span></div>
 </div>
 ````
1 2 3
4 5



# 2. How can you clear sides of a floating element?
- If you clear the side of an element, floating elements will not be accepted on that side.
- With a clear left, an element will be moved below any floating element on the left side. Clear is used to stop any wrap of an element around a floating element.

````
<style>
  .clearLeft{
     clear: left;
  }
</style>
<div class="container">
   <div class="box"><span>1</span></div>
   <div class="box clearLeft"><span>2</span></div>
   <div class="box"><span>3</span></div>
   <div class="box"><span>4</span></div>
   <div class="box"><span>5</span></div>
 </div>
 ````

 - Clear on 2nd box, no elements would be placed left of it.

 1
 2 3 4
 5

# 3. Misc CSS Questions

1. Are CSS properties case sensitive?
i. No.

2. Are CSS selectors case sensitive?
i. Yes, IDs and Classes are case sensitive.

3. Does Margin-Top/Margin-Bottom or Padding-Top/Padding-Bottom have an effect on an Inline Element?
i. No.

4. Does Margin-Left/Margin-Right or Padding-Left/Padding-Right have an effect on an Inline Element?
i. Yes

5. if you have a <p> tag with font-size 10rem, will the text be responsive if a user resizes the browser window?
i. No. rem is only relative to the html(root) font size. em is relative to the font-size of its direct or nearest parent.

6. The Pseudo Class :checked will select inputs with type radio or checkbox, but not <options> elements.
i. False

7. In an Html Doc, the psudeo class :root always refers to the <html> element.
i. True

8. The translate() function can move the position of an element on the z-axis.
i. False
