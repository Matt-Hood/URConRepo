<?php

/* themes/custom/ur_connected/templates/bs-1col--node-event-teaser.html.twig */
class __TwigTemplate_69d80e5b7769b9e1dbde77dfcbeacea33142ac2d99843e26b27f094fa65b70f1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $tags = [];
        $filters = [];
        $functions = [];

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                [],
                [],
                []
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["attributes"] ?? null), "html", null, true));
        echo ">
  ";
        // line 2
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["title_suffix"] ?? null), "contextual_links", []), "html", null, true));
        echo "
  <";
        // line 3
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["main"] ?? null), "wrapper", []), "html", null, true));
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["main"] ?? null), "attributes", []), "html", null, true));
        echo ">
<div class=\"featured-event\">
<div class = \"featured-event-name\">
";
        // line 6
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["main"] ?? null), "content", []), "field_event_name", []), "html", null, true));
        echo "
</div>
  <div class = \"event-short-description\">
";
        // line 9
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["main"] ?? null), "content", []), "field_short_description", []), "html", null, true));
        echo "
  </div>
  <div class = \"event-image img-circle\">
";
        // line 12
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["main"] ?? null), "content", []), "field_image_", []), "html", null, true));
        echo "
  </div>
  <div class = \"event-bottom-section\">
";
        // line 15
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["main"] ?? null), "content", []), "field_location", []), "html", null, true));
        echo "

    <span class=\"flex glyphicon glyphicon-calendar\">";
        // line 17
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["main"] ?? null), "content", []), "field_date", []), "html", null, true));
        echo " </span>
    <span class=\"flex glyphicon glyphicon-user\"> ";
        // line 18
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["main"] ?? null), "content", []), "field_company_name", []), "html", null, true));
        echo " </span>
";
        // line 19
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($this->getAttribute(($context["main"] ?? null), "content", []), "field_details", []), "html", null, true));
        echo "
  </div>
</div>
  </";
        // line 22
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["main"] ?? null), "wrapper", []), "html", null, true));
        echo ">
</";
        // line 23
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["wrapper"] ?? null), "html", null, true));
        echo ">
";
    }

    public function getTemplateName()
    {
        return "themes/custom/ur_connected/templates/bs-1col--node-event-teaser.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  101 => 23,  97 => 22,  91 => 19,  87 => 18,  83 => 17,  78 => 15,  72 => 12,  66 => 9,  60 => 6,  53 => 3,  49 => 2,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("<{{ wrapper }}{{ attributes }}>
  {{ title_suffix.contextual_links }}
  <{{ main.wrapper }}{{ main.attributes }}>
<div class=\"featured-event\">
<div class = \"featured-event-name\">
{{ main.content.field_event_name }}
</div>
  <div class = \"event-short-description\">
{{ main.content.field_short_description }}
  </div>
  <div class = \"event-image img-circle\">
{{ main.content.field_image_ }}
  </div>
  <div class = \"event-bottom-section\">
{{ main.content.field_location }}

    <span class=\"flex glyphicon glyphicon-calendar\">{{ main.content.field_date }} </span>
    <span class=\"flex glyphicon glyphicon-user\"> {{ main.content.field_company_name}} </span>
{{ main.content.field_details }}
  </div>
</div>
  </{{ main.wrapper }}>
</{{ wrapper }}>
", "themes/custom/ur_connected/templates/bs-1col--node-event-teaser.html.twig", "/Applications/MAMP/htdocs/themes/custom/ur_connected/templates/bs-1col--node-event-teaser.html.twig");
    }
}
