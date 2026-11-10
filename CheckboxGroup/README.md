A fieldset that gives related Checkboxes one legend, one helper line and one error message.

```jsx
<CheckboxGroup legend="Notifications" helperText="Choose at least one channel">
  <Checkbox id="n1" label="Email" defaultChecked />
  <Checkbox id="n2" label="SMS" />
</CheckboxGroup>
```

Props: `legend`, `children`, `helperText`, `invalid`, `invalidText`, `style`. Use it whenever there are two or more checkboxes; a single consent checkbox stands alone.
